import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../Services/actions/actionTodos';

const Todos = () => {

    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (

        <>
            <div>Todos</div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}

            {

                todos && todos.map((todo) => {
                    const { id, title } = todo;
                    return (<article key={id}>
                        <h1>{id}</h1>
                        <h1>{title}</h1>
                    </article>)
                }

                )


            }


        </>
    )
}

export default Todos