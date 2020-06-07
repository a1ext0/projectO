# Бот-напоминалка для открытия полива теплиц

## Аутентификация

Перед использованием приложения, необходимо авторизоваться. Без авторизации не будут работать никакие роуты, кроме /login

Авторизация производится POST запросом по роуту /login, в запросе необходимо отправить JSON такого типа:

```json
{"ld": {данные для логина}}
```

Если логин успешен, вернётся ответ с токеном, который нужно будет использовать для дальнейших запросов

```json
{ "status": 1, "token": { jwtToken } }
```

---