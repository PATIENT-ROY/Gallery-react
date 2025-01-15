import React, { useState } from 'react';
import './Journey.css';

function Journey() {
  const [btnSubmit, setBtnSubmit] = useState(false);

  const handleSubmit = () => {
    setBtnSubmit(true);
    // Add your button click logic here
  };

  return (
    <div className="root">
      <div className="title">Создание аккаунта</div>
      <p className="description">Введите свои данные, чтобы создать аккаунт в сервисе</p>
      <div>
        <div className="form-group">
          <label htmlFor="Имя" className="label">
            Имя
          </label>
          <input type="text" id="Имя" name="Имя" placeholder="Имя" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="Фамилия" className="label">
            Фамилия
          </label>
          <input type="text" id="Фамилия" name="Фамилия" placeholder="Фамилия" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="Номер телефона" className="label">
            Номер телефона
          </label>
          <input type="number" id="Номер телефона" name="Номер телефона" placeholder="Номер телефона" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="label">
            Email
          </label>
          <input type="email" id="Email" name="Email" placeholder="Email" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="Пароль" className="label">
            Пароль
          </label>
          <input type="password" id="Пароль" name="Пароль" placeholder="Пароль" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="Подтвердите пароль" className="label">
            Подтвердите пароль
          </label>
          <input type="password" id="Подтвердите пароль" name="Подтвердите пароль" placeholder="Подтвердите пароль" className="input" />
        </div>
        <div className="form-group">
          <input type="checkbox" id="Подтверждаю пароль" name="Подтверждаю пароль" className="checkbox" />
          <label htmlFor="Подтверждаю пароль" className="label">
            Подтверждаю пароль
          </label>
        </div>
        <button className="button" onClick={handleSubmit}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default Journey;