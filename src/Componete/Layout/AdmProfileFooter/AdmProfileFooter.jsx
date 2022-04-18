import React from 'react'
import { AdmProfile } from '../../IU/AdmProfile/AdmProfile'
import { IconProfileAdm } from '../../IU/IconProfileAdm/IconProfileAdm'
import { ImgProfile } from '../../IU/ImgProfile/ImgProfile'
import { TextOversight } from '../../IU/TextOversight/TextOversight'

export const AdmProfileFooter = () => {
  return (
    <div>
      <ImgProfile/>
      <TextOversight text="oversight-profile" />
      <div className="hrtop">
        <hr />
      </div>
      <AdmProfile/>
      <IconProfileAdm />
      <div className="menuhr">
        <hr />
      </div>
    </div>
  )
}
