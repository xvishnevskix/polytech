import { ref } from 'vue'


export function useRoutes() {
    const listPoints = [
        { id: 1, text: 'Авторизация', link: 'auth'},
        { id: 2, text: 'Список форм', link: 'forms'},
        { id: 3, text: 'Добавление полей', link: 'fields'},];

        return listPoints




}