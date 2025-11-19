
import { Route, Routes } from 'react-router'
import { Home } from '../modules/views/Home'
import { Welcome } from '../modules/views/Welcome'


export const AppRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Welcome />} />
            <Route path="/home" element={<Home />} />


        </Routes>
    )
}
