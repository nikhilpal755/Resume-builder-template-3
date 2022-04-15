import styles from '../../../../styles'
import { Text, View } from '@react-pdf/renderer'

export const SkillItem = ({ name, fillSkill }) => {
  
  return (
    <View style={styles.skill__item__container}>
      <Text style={styles.skill__item__text}>{name}</Text>
      <View>
        {/* <View
          style={[styles.skill__item__fill, { width: `${percent}%` }]}
        ></View> */}
         <Text style={{fontSize: '9' , color: 'grey'}}>{fillSkill}</Text>
      </View>
    </View>
  )
}
