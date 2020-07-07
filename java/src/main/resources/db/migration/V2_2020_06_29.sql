CREATE TABLE `openapi_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `openapi_spec_comments` (
  `id` int(11) NOT NULL,
  `openapi_spec_id` int(11) NOT NULL,
  `comments` text DEFAULT NULL,
  `created_ip` varchar(32) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `openapi_consumers` (
  `id` int(11) NOT NULL,
  `openapi_spec_id` int(11) NOT NULL,
  `consumer_name` varchar(200) DEFAULT NULL,
  `consumer_logo` varchar(512) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `openapi_specs` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `spec` text DEFAULT NULL,
  `version` varchar(32) DEFAULT NULL,
  `source_repository` varchar(255) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `publisher_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `num_comments` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `spec_url` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `openapi_spec_tags` (
  `id` int(11) NOT NULL,
  `openapi_spec_id` int(11) NOT NULL,
  `tag` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `publisher` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `website` varchar(500) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `publisher_users` (
  `user_id` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `site_settings` (
  `id` int(11) NOT NULL,
  `setting_name` varchar(50) DEFAULT NULL,
  `setting_value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Indexes for table `openapi_categories`
--
ALTER TABLE `openapi_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `openapi_consumers`
--
ALTER TABLE `openapi_consumers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `openapi_spec_id` (`openapi_spec_id`);

--
-- Indexes for table `openapi_specs`
--
ALTER TABLE `openapi_specs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `publisher_id` (`publisher_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `openapi_spec_comments`
--
ALTER TABLE `openapi_spec_comments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `openapi_spec_id` (`openapi_spec_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `openapi_spec_tags`
--
ALTER TABLE `openapi_spec_tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `openapi_spec_id` (`openapi_spec_id`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `publisher_users`
--
ALTER TABLE `publisher_users`
  ADD PRIMARY KEY (`user_id`,`publisher_id`),
  ADD KEY `publisher_id` (`publisher_id`);


--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `openapi_categories`
--
ALTER TABLE `openapi_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2050;

--
-- AUTO_INCREMENT for table `openapi_consumers`
--
ALTER TABLE `openapi_consumers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `openapi_specs`
--
ALTER TABLE `openapi_specs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14721;

--
-- AUTO_INCREMENT for table `openapi_spec_comments`
--
ALTER TABLE `openapi_spec_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `openapi_spec_tags`
--
ALTER TABLE `openapi_spec_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=362;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `openapi_consumers`
--
ALTER TABLE `openapi_consumers`
  ADD CONSTRAINT `openapi_consumers_ibfk_1` FOREIGN KEY (`openapi_spec_id`) REFERENCES `openapi_specs` (`id`);

--
-- Constraints for table `openapi_specs`
--
ALTER TABLE `openapi_specs`
  ADD CONSTRAINT `openapi_specs_ibfk_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`id`),
  ADD CONSTRAINT `openapi_specs_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `openapi_categories` (`id`),
  ADD CONSTRAINT `openapi_specs_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `openapi_specs_ibfk_4` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `openapi_spec_comments`
--
ALTER TABLE `openapi_spec_comments`
  ADD CONSTRAINT `openapi_spec_comments_ibfk_1` FOREIGN KEY (`openapi_spec_id`) REFERENCES `openapi_specs` (`id`),
  ADD CONSTRAINT `openapi_spec_comments_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `openapi_spec_tags`
--
ALTER TABLE `openapi_spec_tags`
  ADD CONSTRAINT `openapi_spec_tags_ibfk_1` FOREIGN KEY (`openapi_spec_id`) REFERENCES `openapi_specs` (`id`);

--
-- Constraints for table `publisher`
--
ALTER TABLE `publisher`
  ADD CONSTRAINT `publisher_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `publisher_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `publisher_users`
--
ALTER TABLE `publisher_users`
  ADD CONSTRAINT `publisher_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `publisher_users_ibfk_2` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;
