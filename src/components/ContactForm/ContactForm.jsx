import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, FormItem, AddContactButton, FormList } from './ContactForm.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export class ContactForm extends Component {
  state = {
    name: '',
    number:'',
}

  handleChange = ({ target: { name, value } }) =>{
    this.setState({
      [name]: value,
    });
}

  handleSubmit = (e) => {
    e.preventDefault();
    const isContactAdded = this.props.onSubmit(this.state);

    if (isContactAdded  === true) {
      
        this.reset();
    }
    
  }


  reset() {
    this.setState({
      name: '',
      number:'',
  })
}


  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormList>
          <FormItem>
            <label className="contact-form__field">
              <span className="contact-form__label">Name</span>
              <span className='contact-from__wrapper'>
                {renderIcons('person', iconSize.sm)}
                <input
                  className="contact-form__input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
              />
              </span>
              
            </label>
          </FormItem>
          <FormItem>
            <label className="contact-form__field">
              <span className="contact-form__label">Number</span>
              <span className='contact-from__wrapper'>
                {renderIcons('number', iconSize.sm)}
                  <input
                  className="contact-form__input"
                  type="tel"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
              />
              </span>
            </label>
          </FormItem>
        </FormList>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </Form>
    );

}
} 

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}