import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task

    //criamos uma variavel que seta somente o ID e done, e recebe do paremetro o newTaskTitle (titulo
    //da tarefa)
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    //aqui ele copia todas minhas tarefas(map) e traz os valores para updateTasks
    const updatedTasks = tasks.map((task) => ({ ...task }));
    //aqui foundItem buscou nas minhas tasks qual era o ID selecionado
    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) {
      return;
    }

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    //aqui buscamos tds as tasks e devolvendo o valor sem o ID selecionado (excluindo)
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
});
