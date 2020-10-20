import React from 'react'
import  Head  from "next/head"
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react"
import ContactsForm from '../components/form'
import Home from '../components/aboutUser'

const useStyles = makeStyles({
    root: {
        position: 'relative',
      minHeight: '470px',
      width: '100%',
      padding: '20px 40px 10px 40px',
      '@media (max-width: 575px)': {
          padding: '20px 5px 10px 5px'
      }
      
    },
    bgImg: {
        width: '100%',
        height: '470px',
        position: "absolute",
      top: "0",
      left: "0",
      zIndex: "-1",
      '@media (max-width: 767px)': {
        height: '300px',
    },
      '@media (max-width: 575px)': {
        height: '222px',
    }
    }, 
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    main: {
        marginTop: '24px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        
    },
    userImg: {
        flex: '0 0 40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
        '@media (max-width: 575px)': {
            marginRight: '7px'
        }
    },
    bell: {
        flex: '0 0 24px',
        height: '29.25px',
        marginRight: '20px',
        paddingRight: '26px',
        borderRight: '1px solid #FFFFFF',
        cursor: 'pointer'
    },
    name: {
        color: '#FFFF',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        '@media (max-width: 767px)': {
            display: 'none'
        }
    },
    title: {
        color: '#FFF',
        marginTop: '17x',
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: '400',
    },
    subtitle: {
        color: '#FFF',
        fontSize: '14px',
        fontWeight: '400',
        marginTop: '10px',
    },
    card: {
        marginTop: '32px',
        background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        height: '128px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 30px',
        '@media (max-width: 575px)': {
            padding: '0 15px',
            height: '71px',
            marginTop: '10px'
        }
    },
    cardWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    cardImg: {
        flex: '0 0 80px',
        height: '80px',
        borderRadius: '50%',
        marginRight: '40px',
        '@media (max-width: 767px)': {
           marginRight: '15px'
        },
        '@media (max-width: 575px)': {
            flex: '0 0 40px',
            height: '40px'
        }
    },
    cardName: {
        fontSize: '30px',
        color: '#FFFF',
        '@media (max-width: 767px)': {
            fontSize: '23px'
        },
        '@media (max-width: 575px)': {
            fontSize: '14px'
        }
    },
    edit: {
        display: 'flex',
        alignItems: 'center',  
        cursor: 'pointer', 
        
    },
    editTitle: {
        fontSize: '14px',
        textTransform: 'uppercase',
        color: '#ffff',
        lineHeight: '140%',
        marginRight: '8px',
        textDecoration: 'none',
        '@media (max-width: 991px)': {
            display: 'none'
        }
    },
    close: {
        display: 'flex',
        alignItems: 'center',  
        cursor: 'pointer',  
    },
    closeTitle: {
        fontSize: '14px',
        textTransform: 'uppercase',
        color: '#ffff',
        lineHeight: '140%',
        marginRight: '8px',
        textDecoration: 'none',
        '@media (max-width: 991px)': {
            display: 'none'
        }
    }
  })

export default function MainLayout() {
    const classes = useStyles()
    const [editMode, setEditmode] = useState(false)
    return (
        <div>
            <Head>
                <title>TEST | SUN</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.root}>
                <svg className={classes.bgImg} viewBox="0 0 1481 470" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z" fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="1481" y1="235.001" x2="-15.6763" y2="235.001" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2196F3"/>
                        <stop offset="1" stopColor="#1EC3AF"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className={classes.header}>
                    <div className={classes.item}>
                        <img className={classes.bell} src="/bell.svg" alt="bell"/>
                    </div>
                    <div className={classes.item + " " + classes.userInfo}>
                        <div>
                            <img className={classes.userImg} src="/user.svg" alt="user"/>
                        </div>
                        <div className={classes.name}>
                            Иванова А.
                        </div>
                    </div>
                </div>
                <div className={classes.title}>
                ЛИЧНЫЙ ПРОФИЛЬ
                </div>
                <div className={classes.subtitle}>
                Главная/Личный профиль
                </div>
                <div className={classes.card}>
                    <div className={classes.cardWrapper}>
                        <img className={classes.cardImg} src="/user.svg" alt="user"/>
                        <div className={classes.cardName}>Иванова Анна Михайловна</div>
                    </div>
                    {editMode 
                    ? 
                    <div onClick={() => setEditmode(false)} className={classes.close}>
                        <div className={classes.closeTitle}>Закрыть</div>
                        <img src="/close.svg" alt="edit"/>
                        
                    </div> 
                    : 
                    <div onClick={() => setEditmode(true)} className={classes.edit}>
                        <div className={classes.editTitle}>РЕДАКТИРОВАТЬ</div>
                        <img src="/edit.svg" alt="edit"/>
                    </div>}
                </div>
                <main className={classes.main}>
                    {editMode ? <ContactsForm/>: <Home/>}
                </main>
            </div>
            
        </div>
    )
}