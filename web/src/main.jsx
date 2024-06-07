import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout';
import Home from './pages/home';
import Instituicao from './pages/instituicao';
import './styles/main.scss'

import Denuncie from './pages/denuncie/denuncie';

import Problema from './pages/problema';
import Solucao from './pages/solucao';

ReactDOM.createRoot(document.getElementById('root')).render(
<HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="instituicao" element={<Instituicao />} />
          <Route path='/denuncie' element={<Denuncie/>} />
          <Route path='/problema' element={<Problema/>} />
          <Route path='/solucao' element={<Solucao/>} />
        </Route>
      </Routes>
    </HashRouter>
)
