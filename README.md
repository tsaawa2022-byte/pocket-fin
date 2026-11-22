# PocketFin — карманный финансовый помощник

Веб-приложение для учёта личных финансов: получает банковские операции из SMS
(канал MVP — пересылка SMS в Telegram-бота), структурирует их и выдаёт
персональные рекомендации по финансовой грамотности и накоплениям.

**Стек:** Java 21 · Spring Boot 3 · PostgreSQL · Flyway · Angular 18 · Docker

## Структура

```
backend/    Spring Boot (api, parser, recommendations, telegram-bot)
frontend/   Angular (standalone, signals)
deploy/     docker-compose, nginx
docs/       ТЗ, схема БД, API-контракты
```

## Быстрый старт

```bash
# 1. Поднять PostgreSQL
cd deploy && docker compose up -d postgres

# 2. Backend (требуется JDK 21)
cd backend && ./mvnw spring-boot:run

# 3. Frontend (требуется Node 20+)
cd frontend && npm ci && npm start
```

Проверка: http://localhost:8080/api/health

## Этапы разработки

| Этап | Содержание | Статус |
|---|---|---|
| 0 | Скелет, CI, docker-compose | ✅ |
| 1 | Auth (JWT), профиль, код привязки Telegram | ⬜ |
| 2 | Транзакции, категории, фильтры | ⬜ |
| 3 | Telegram-бот, парсер SMS (Сбер, Тинькофф, Альфа) | ⬜ |
| 4 | Статистика, графики | ⬜ |
| 5 | Движок рекомендаций (R1–R5) | ⬜ |
| 6 | Цели накоплений, еженедельный дайджест | ⬜ |
| 7 | Тесты, харднинг | ⬜ |

Подробности — в [docs/ТЗ](docs/ТЗ.md).
