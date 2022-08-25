import InputItem from '@ant-design/react-native/lib/input-item';
import Popup from 'components/atoms/Popup/Popup';
import { DialogChild } from 'components/organisms/DialogChild/DailogChild';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import appTheme from 'styles/appTheme';
import { ButtonTheme, Label } from '../../components/atoms';
import AddIcon from '../../components/atoms/Icon/AddIcon';
import DeleteIcon from '../../components/atoms/Icon/DeleteIcon';
import EditIcon from '../../components/atoms/Icon/EditIcon';
import { addTask, deleteTask, editTask, Task } from '../../redux/taskSlice';
import { styles } from './TodoList.style';
const TodoList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state: RootState) => state.tasks);
  const [data, setData] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task>();
  const [toDo, setTodo] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const refs = useRef([]);

  const onDelete = (item: Task) => {
    setCurrentTask(item);
    setIsPopupOpen(true);
  };

  const onEdit = (item: Task, index: number) => {
    const tempData = [...data];
    const task: Task = {
      id: tempData[index].id,
      name: tempData[index].name,
      editable: true,
    };
    tempData[index] = task;
    setData(tempData);
    refs.current[index]?.focus();
  };
  const onSubmitTask = () => {
    dispatch(
      addTask({
        task: toDo,
      }),
    );
    setTodo('');
  };
  //renderItem function with a delete button

  useEffect(() => {
    const tempTodo = [...toDos].reverse();
    setData(tempTodo);
  }, [toDos]);

  const onTextChanged = (index: number, value: string) => {
    const tempData = [...data];
    const task: Task = {
      id: tempData[index].id,
      name: value,
      editable: true,
    };
    tempData[index] = task;
    setData(tempData);
  };

  const renderItem = ({ item, index }: { item: Task; index: number }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.logo}
          source={require('../../assets/Icons/defaultProjectIcon_2x.png')}
        />
        {item.editable ? (
          <View style={styles.inputStyle}>
            <InputItem
              ref={input => {
                refs.current[index] = input || null;
              }}
              value={item.name}
              onChange={value => {
                onTextChanged(index, value);
              }}
              onBlur={() => {
                dispatch(
                  editTask({
                    id: item.id,
                    task: item.name,
                  }),
                );
              }}
              onSubmitEditing={() => {
                dispatch(
                  editTask({
                    id: item.id,
                    task: item.name,
                  }),
                );
              }}
              placeholder="Name your project"
              style={styles.inputItemStyle}
              last
            />
          </View>
        ) : (
          <View style={styles.dateAndNameStyle}>
            <Label style={styles.labelNameStyle}>{item.name}</Label>
            <Label style={styles.labelDateStyle}>{item.date}</Label>
          </View>
        )}

        <View style={styles.iconWrapper}>
          <ButtonTheme
            onPress={() => {
              onEdit(item, index);
            }}
            text=""
            icon={<EditIcon fill={appTheme.black_30} />}
            style={styles.deleteIconStyle}
          />
          <ButtonTheme
            onPress={() => {
              onDelete(item);
            }}
            text=""
            icon={<DeleteIcon fill={appTheme.black_30} />}
            style={styles.deleteIconStyle}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ButtonTheme
        onPress={onSubmitTask}
        text=""
        icon={<AddIcon />}
        style={styles.floatingIcon}
        activeStyle={styles.floatingActiveIcon}
      />
      <Popup
        isOpen={isPopupOpen}
        children={
          <DialogChild
            handleOnNo={() => {
              setIsPopupOpen(false);
            }}
            handleOnYes={() => {
              setIsPopupOpen(false);
              dispatch(
                deleteTask({
                  id: currentTask?.id,
                }),
              );
            }}
          />
        }
        hidePopup={onSubmitTask}
        handleOnShow={onSubmitTask}
        handleOnHide={onSubmitTask}
      />
    </View>
  );
};

export default TodoList;
