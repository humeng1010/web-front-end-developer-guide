import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const element = [
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        path: 'detail',
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to={'/about'} />
    }
]
export default element