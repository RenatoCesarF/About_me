import React from 'react'

//Importing the icons 
import { FaPython, FaReact } from 'react-icons/fa'
import { DiDatabase } from 'react-icons/di'
import {SiNextdotjs, SiFlutter} from 'react-icons/si'

import './style.css'

export default function Skills() {
  return (
  
    <div style={{display:"inline" }} >
      <div className='area_detect' >
        <FaPython className='one_comp' size='5rem' id='one_comp' />
            <h2>Python</h2>
      </div>

      <div className='area_detect'>
        <FaReact className='one_comp' size='5rem'/>
            <h2>React-Js</h2>
      </div>

      <div className='area_detect'>
        <SiNextdotjs className='one_comp' size='5rem' />
          <h2>Next</h2>
      </div>

      <div className="area_detect">
        <DiDatabase className='one_comp' size='5rem' />
            <h2>SQL</h2>
      </div>

      <div className='area_detect'>
        <SiFlutter className='one_comp' size='5rem' />
          <h2>Flutter</h2>
      </div>
    </div>
  );
}

