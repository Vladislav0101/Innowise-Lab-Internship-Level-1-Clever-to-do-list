# Innowise Lab Internship: Level 1: Clever to-do list

## Task

```
https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit
```

## How to run the app

```
1. Склонируйте репозиторий: git clone https://github.com/Vladislav0101/Innowise-Lab-Internship-Level-1-Clever-to-do-list
2. После клонирования установите зависимости npm install
3. Запустите проект
```

## Database snapshot

```
└─users                         # Таблица ползователей
    └─uid                       # УникальныйID пользователя
       └─date                   # Дата, включающая все таски данного дня
           └─taskId             # Ключ таска
                ├─completed     # Завершённость таска
                ├─description   # Описание таска
                └─title         # Загаловок таска
```

## Application stack

```

```

### Firebase

### Vue-router

### Vuex

## Folder structure

```
└─src
   ├─assets       # Необходимые элементы(изображения)
   ├─Components   # Компоненты приложения
   ├─route        # Роутер приложения
   ├─store        # Хранилище данных
   ├─App.vue      # Главный компонент
   └─main.js      # Точка входа
```
