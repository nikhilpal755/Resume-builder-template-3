import React from 'react'
import { View } from '@react-pdf/renderer'
import styles from '../../../styles'
import { ProfileContainer } from './top/profileContainer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import { Left } from './Left_'
import { Right } from './Right_'
import About from './right/About'

export const Top = () => {
    const ctx = useContext(BuilderContext)
    const profile = ctx.getComponentData('Profile')
    // console.log(profile)
  return (
    <>
     <div style={{position : 'relative', display: 'flex'}}>

      <div style={styles.section__top}>
          <ProfileContainer profile={profile}/>
          <About text={ctx.getComponentData('Profile').about} />
      </div>
      
      <div style={{postion : 'relative', display: 'flex', flexDirection: 'row',justifyContent: 'center' }}>
        <Left />
        <Right />
      </div>
     </div>
     
    
     
    </>
  )
}
