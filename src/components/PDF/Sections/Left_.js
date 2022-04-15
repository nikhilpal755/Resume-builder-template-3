import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'
import Divider from './right/Divider'
// import { ProfileContainer } from './left/ProfileContainer'

const Socials = () => {
  const ctx = useContext(BuilderContext)

  return (
    <View style={styles.socials__container}>
      {ctx.getSocials().items.map((item, index) => {
        if (item.enabled)
          return (
            <SVGItem
              key={index}
              viewBox={item.viewBox}
              path={item.path}
              url={item.url}
            />
          )
      })}
    </View>
  )
}
const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '25', marginLeft: '15', marginRight: '15' }}>
      <Text
        style={{

          color: 'black',
          fontSize: '15',
          paddingBottom: '10',
        }}
      >
        {heading}
      </Text>
      {props.children}
    </View>
  )
}
const EducationText = ({ text, date }) => (
  <View style={{ paddingBottom: '10' }} key={text}>
    <Text style={{  fontSize: '12' }}>{text}</Text>
    <Text style={{  fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

export const Left = () => {
  const ctx = useContext(BuilderContext)
  // const education = ctx.getComponentData('Education')
  const skills = ctx.getComponentData('Skills')
  // const profile = ctx.getComponentData('Profile')
  const contact = ctx.getComponentData('Contact')
  // const certifications = ctx.getComponentData('Certifications')
  const keySkills = ctx.getComponentData('Professional Skills')
  const languages = ctx.getComponentData('Languages');
  // console.log(keySkills)
  return (
    
      
      <View style={styles.section__left}>
        {/* <Wrapper heading={education.header}>
          {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} />
          ))}
        </Wrapper> */}
            {contact.display && (
              <Wrapper heading={contact.header}>

                <Divider/>
                {contact.items.map((item, index) => (
                  <Text
                    key={index}
                    style={{  fontSize: '12', marginBottom: '8px' }}
                  >
                    {item.text}
                  </Text>
                ))}
              </Wrapper>
            )}

            {
               <Wrapper heading={"Professional Skills"}>
                <Divider/>
               {keySkills?.items?.map((item, index) => (
                 <Text
                   key={index}
                   style={{  fontSize: '12', marginBottom: '8px' }}
                 >
                   {item.text}
                 </Text>
               ))}
             </Wrapper>
            }
        {skills.display && (
          <Wrapper heading={skills.header}>
            {skills.items.map((item, index) => (
              <SkillItem key={index} name={item.text} fillSkill={item.level} />
            ))}
          </Wrapper>
        )}

        
    

        <View>
         <Wrapper heading={"Languages"}>
          <Divider/>
            {languages.items.map((item, index) => 
                <SkillItem key={index} name={item.text} fillSkill={item.level} />
            )}
         </Wrapper> 
        </View>
            

        {/* {certifications.display && (
          <Wrapper heading={certifications.header}>
            {certifications.items.map((item, index) => (
              <EducationText key={index} text={item.name} date={item.date} />
            ))}
          </Wrapper>
        )} */}
        {/* <Socials /> */}


      </View>
  
  )
}
