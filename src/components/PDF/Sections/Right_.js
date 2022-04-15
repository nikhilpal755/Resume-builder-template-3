import styles from '../../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View } from '@react-pdf/renderer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import {Text} from '@react-pdf/renderer'
import Projects from './right/Projects'
import Divider from './right/Divider'

const EducationText = ({ degree, date }) => (
  <View style={{ paddingBottom: '10' }} key={degree}>
    {/* <Text style={{color: '#fff', fontSize: '20'}}>Education</Text> */}
    <Text style={{  fontSize: '12' }}>{degree}</Text>
    <Text style={{ fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '25', marginLeft: '15', marginRight: '15' }}>
      <Text
        style={{
          // color: '#FFF',
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

export const Right = () => {
  const ctx = useContext(BuilderContext)

  const education = ctx.getComponentData('Education');
  // console.log(education)
  return (
    <View style={styles.section__right}>
      {/* <About text={ctx.getComponentData('Profile').about} /> */}
      <EmploymentHistory items={ctx.getComponentData('Employment').items} />
     
     <Wrapper heading={education.header}>

        <Divider/>
      {
        education.items.map((item, index) => {
          console.log(item.degree, item.date)
          return (
            <EducationText
           
              degree={item.degree}
              date={item.date}
              key={index}
            />
          )
        })
      }
     </Wrapper>


      <Projects projects={ctx.getComponentData('Projects')} />
    </View>
  )
}
