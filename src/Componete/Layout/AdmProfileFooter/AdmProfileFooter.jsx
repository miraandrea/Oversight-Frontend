import React from 'react'
import { AdmProfile } from '../../IU/AdmProfile/AdmProfile'
import { IconProfileAdm } from '../../IU/IconProfileAdm/IconProfileAdm'
import { ImgProfile } from '../../IU/ImgProfile/ImgProfile'
import { TextOversight } from '../../IU/TextOversight/TextOversight'
import './AdmProfileFooter.css'

export const AdmProfileFooter = () => {
  return (
    <div>
    <div className="iAdm">
      <ImgProfile  img="ImgAdm"  />

    </div>

      <TextOversight text="oversight-profile" />
      <div className="hrtop">
      <AdmProfile className={Text} />
      </div>
      <IconProfileAdm  />

    </div>
  )
}
