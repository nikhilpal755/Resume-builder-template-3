import { StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  section__top: {
   
    // height: '20%',
    // width: '100vw',
    width: '100%',
    // backgroundColor: 'whitesmoke',
    // postion:'absolute',
    // top : 0  
  },
  document: {
    padding: '10%'
  },
  section__right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: '70%',
    // marginTop: '30%',
    // marginLeft: '-5%'
    // backgroundColor: 'whitesmoke',
    // display: 'inline-block',
    alignSelf: 'flex-end',
    
    height: '100%',
    // marginTop: '50'
  },
  section__left: {
    width: '30%',
    // backgroundColor: '#084c41',
    color: 'black',
    height: '100%',

    // marginTop: '27%',
    // marginLeft: '-15%'
    // display: 'inline-block',
    alignSelf: 'flex-start'
  },
  name_text: {
    paddingTop: '10px',
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: '900',
    // color: 'white',
  },
  profession_text: {
    // fontFamily: 'Roboto',
    // color: '#d1d5db',
    fontSize: '11px',
  },
  heading__text: {
    fontSize: '14',
  },
  main__text: {
    fontSize: '11',
  },
  left__section__heading: {
    fontSize: '12',
  },
  items__container: {
    marginLeft: '15',
    marginRight: '15',
    fontSize: '11',
  },
  skill__item__container: {
    paddingTop: '3px',
  },
  skill__item: {
    width: '100%',
    height: '5px',
    marginTop: '5px',
    backgroundColor: '#518179',
  },
  skill__item__fill: {
    width: '30%',
    height: '51px',
    backgroundColor: '#FFF',
  },
  skill__item__text: {

    fontSize: '9',
  },
  socials__container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '20',
  },
 
})
