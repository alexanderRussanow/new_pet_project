import React from 'react'
import {useTranslation } from 'react-i18next'
// style
import classes from  './home.module.scss'

const HomePage:React.FC = () => {
   const {t} = useTranslation('home')
   return <h2 className={classes.test}>{t('HOME')}</h2>
}

export default HomePage