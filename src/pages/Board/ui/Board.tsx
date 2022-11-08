import React from 'react'
import {useTranslation } from 'react-i18next'

const BoardPage: React.FC = () => {
   const {t} = useTranslation('board')
   return <h2>{t('BOARD')}</h2>
}

export default BoardPage