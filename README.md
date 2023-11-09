# Objective - Тестовое задание

## Технологии:
- Vue(3) - Composition Api
- JavaScript
- Scss

## Постановка задачи, компонент Select:
Создать переиспользуемый компонент Select:

Требования: 
1) селект должен быть сверстан в соответствие с макетом;
2) выпадающее меню селекта должно плавно появляться и исчезать по нажатии на стрелку;
3) стрелка должна переворачиваться когда выпадающее меню открывается/закрывается;
4) все необходимые данные, а именно список значений, выбранное значение и функция изменения значения передаются в Селект через пропсы;
5) при выборе значения плейсхолдер должен передвигаться к верхнему левому краю селекта;
6) задание необходимо написать на Vue (желательно на Composition Api);

Дополнительные данные:
- иконка стрелки находится в папке в файле arrowSelect.svg;
- все рамки селекта сделать цветом #F968bf;
- цвет текста - #29277d;
- цвет фона значения при наведении - #DADEFE;

## Компонент Table:
Задание:
1) в заголовках колонок хедера есть возможность отсортировать данные. Все значения в таблице должны сортироваться по колонкам при нажатии на стрелки и заголовки колонок по правилам:
- числовые значения сортируются по возрастанию/убыванию;
- даты по возрастанию/убыванию;
- строчные значения по алфавиту.
2) когда сортируются значения по одному столбику, все остальные отсортированные ранее значения сбрасываются; то есть значения всегда сортируются только по одному критерию;
3) высота таблицы ограничена и имеет значение 600px;
4) в таблице должен быть скролл. Хедер при скролле таблицы должен оставаться на месте, все строки скроллятся под хедер;
5) стрелки сортировки должны стоять рядом с заголовком колонки в хедере таблицы. Иконка активной стрелки должна закрашиваться цветом #29277d;
6) задание необходимо написать на Vue (желательно на Composition Api).

Дополнительные данные:
Заголовки таблицы: 
- номер (число);
- девелопер (строка);
- срок (дата в ISO 8601 формате);
- тип (строка);
- этаж (число);
- площадь (число).
  
https://github.com/AzatF2020/objective/assets/104619961/6a2870cf-3df6-4bc6-a165-26d435c18631

Проект состоит из двух компонентов в директории /src/components:
- VSelect;
- VTable;

Данные лежат в директории /utils/api

### Работа с проектом:
1. ## Склонировать проект локально:
``` git clone git@github.com:AzatF2020/objective.git```
2. ## Установить зависимости:
``` npm install ```
3 ## Запустить проект в dev:
``` npm run dev ```






