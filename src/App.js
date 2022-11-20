import './App.css';
import Button from './components/Button.jsx';
import { MdAddShoppingCart } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='container-left'>
          <h2 className='title-nav'><b>Dev</b>challenges.io</h2>

          <div className='nav'>
            <ul>
              <li><a href='#'>Colors</a></li>
              <li><a href='#'>Typography</a></li>
              <li><a href='#'>Spaces</a></li>
              <li><a href='#'>Buttons</a></li>
              <li><a className='link-active' href='#'>Inputs</a></li>
              <li><a href='#'>Grid</a></li>
            </ul>
          </div>
        </div>

        <div className='container-right'>
          <h1>Buttons</h1>

          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button />'
              name='Default'
              btn_class='btn btn-light' />
            <Button
              columns='col-3'
              sub='&:hover, &:focus'
              name='Default'
              btn_class='btn btn-light active' />
          </div>

          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button variant="outline" />'
              name='Default'
              btn_class='btn btn-outline-primary' />
            <Button
              columns='col-3'
              sub='&:hover, &:focus'
              name='Default'
              btn_class='text-primary bg-light active' />

          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button variant="text" />'
              name='Default'
              btn_class='text-primary' />
            <Button
              columns='col-3'
              sub='&:hover, &:focus'
              name='Default'
              btn_class='btn-outline-light text-primary bg-light active' />
          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button disableShadow />'
              name='Default'
              btn_class='btn btn-primary shadow-none' />
          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button disabled />'
              name='Default'
              btn_class='btn btn-light' />
            <Button
              columns='col-3'
              sub='<Button variant=”text” disabled />'
              name='Disabled'
              btn_class='btn-outline-light disabled text-dark' />
          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button startIcon=”local_grocery_store” />'
              left={<MdAddShoppingCart />}
              name='Default'
              btn_class='btn btn-primary' />
            <Button
              columns='col-3'
              sub='<Button endIcon=”local_grocery_store” />'
              right={<MdAddShoppingCart />}
              name='Default'
              btn_class='btn btn-primary' />

          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button size=”sm” />'
              name='Default'
              btn_class='btn btn-primary btn-sm' />
            <Button
              columns='col-3'
              sub='<Button size=”md” />'
              name='Default'
              btn_class='btn btn-primary btn-md' />
            <Button
              columns='col-3'
              sub='<Button size=”lg” />'
              name='Default'
              btn_class='btn btn-primary btn-lg' />
          </div>
          <div className='row'>
            <Button
              columns='col-3'
              sub='<Button color=”default” />'
              name='Default'
              btn_class='btn btn-light' />
            <Button
              columns='col-3'
              sub='<Button color=”primary” />'
              name='Default'
              btn_class='btn btn-primary' />
            <Button
              columns='col-3'
              sub='<Button color=”secondary” />'
              name='Secondary'
              btn_class='btn btn-secondary' />
            <Button
              columns='col-3'
              sub='<Button color=”danger” />'
              name='Danger'
              btn_class='btn btn-danger' />
          </div>

          <div className='row'>
            <Button
              columns='col-3'
              sub='&:hover, &:focus'
              name='Default'
              btn_class='btn btn-light active' />
            <Button
              columns='col-3'
              sub=''
              name='Default'
              btn_class='btn btn-primary active' />
            <Button
              columns='col-3'
              sub=''
              name='Secondary'
              btn_class='btn btn-secondary active' />
            <Button
              columns='col-3'
              sub=''
              name='Danger'
              btn_class='btn btn-danger active' />
          </div>
          <div className='credit'>created by Tzzent - devChallenges.io</div>
        </div>
      </div>
    </div >
  );
}

export default App;
