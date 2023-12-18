'use client';
import {Suspense, useEffect, useState} from 'react'
import Resource from "@/app/resource";

export default function ClientWrapper() {
    const [showServerComponent, setShowServerComponent] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowServerComponent(true);
    //     }, 5_000);
    // }, []);
    return (
        <div style={{border: 'solid'}}>
            clientWrapper
            <Counter/>
            <hr/>

            <button onClick={() => setShowServerComponent(true)}>Show server component</button>
            {showServerComponent && <Suspense fallback={<div>Loading...</div>}>
                <Resource/>
            </Suspense>
            }
        </ div>
    );
}


function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
        </div>
    )
}

