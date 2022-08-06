import {React, useState, useEffect} from 'react';
import { fetchThreads } from '../apis/threadAPI';
import './Threads.css'

export const Threads = () => {
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        fetchThreads(0)
        .then((data) => setThreads(data))
    }, []);

    return (
        <div className='threads-container'>
            <h2>新着スレッド一覧</h2>
            {
                (threads.length) ? 
                <ul className='threads-list'>
                    {threads.map((e)=><li key={e.id} className="threads-title">{e.title}</li>)}
                </ul>
                :
                <p>
                    表示中...
                </p>
            }
        </div>
    )
}