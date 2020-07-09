INSERT INTO users (id, email, firstname, lastname, password_hash, created_at, updated_at) VALUES (1, 'demo@demo.com', 'John', 'Doe', '$2a$10$sFcDZ0hAFIxLyN7SQtwjMeA3KQeU94F7lFz150bYc2fUE9pv9Zv/K', NULL, NULL);

INSERT INTO `openapi_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES (2018, 'financial', '2020-01-07 00:12:07', '2020-01-07 00:12:07');

INSERT INTO `publisher` (`id`, `name`, `website`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES (31, '1forge.com', NULL, 1, 1, '2020-01-07 00:12:07', '2020-01-07 00:12:07');

INSERT INTO `openapi_specs` (`id`, `name`, `description`, `spec`, `version`, `source_repository`, `avatar_url`, `publisher_id`, `category_id`, `num_comments`, `created_by`, `updated_by`, `created_at`, `updated_at`, `spec_url`) VALUES (13254, '1Forge Finance APIs', 'Stock and Forex Data and Realtime Quotes', NULL, '0.0.1', NULL, 'https://api.apis.guru/v2/cache/logo/http_1forge.com_logo.png', 31, 2018, NULL, NULL, NULL, '2020-01-13 00:17:12', '2020-01-13 00:17:12', 'https://api.apis.guru/v2/specs/1forge.com/0.0.1/swagger.json');