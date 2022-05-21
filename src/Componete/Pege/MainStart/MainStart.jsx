import React from 'react'
import { Noback } from '../../IU/PrivaterRoute/Noback'
import { Session } from '../../Layout/Session/Session'

export const MaintStart = () => {

  return (
    <div>
      <Session />
      <script src={<Noback />}/>
    </div>
  )
}