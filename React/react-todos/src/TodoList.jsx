import * as React from 'react';
import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material'

const getInitialData = () => { //로컬 스토리지에서 todos 키에 있는 내용을 가져와 있으면 반환 없으면 빈 배열로 반환하는 함수
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => { //todos가 바뀔 때 마다 로컬 스토리지에 저장되는 이펙트
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {  //목록 삭제하는 함수
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }
    const toggleTodo = (id) => { //리스트의 아이디가 일치하면 completed 값을 변경해 반환
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => { //목록을 추가하는 함수
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3,
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    < TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    )
}