import React from 'react';
import './App.css';
import 'h8k-components';

import {useState} from "react"
import Articles from './components/Articles';


const title = "Sorting Articles";

function App({articles}) {
    const [data,setData]=useState(articles)

    const sortByVotes=()=>{
     let temp=[];
     Object.assign(temp,data);
   temp.sort((a,b)=> b.upvotes - a.upvotes)
        setData(temp)
   
      
    };
    const sortByDate=()=>{
        let temp=[];
        Object.assign(temp,data);

        temp.sort((a,b)=>{
            const dateA=new Date(a.date);
            const dateB=new Date(b.date);
            return dateB - dateA;
           });
           setData(temp)
      
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=>sortByVotes()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=>sortByDate()} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={data}/>
        </div>
    );

}

export default App;
