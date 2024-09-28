CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`content` text,
	`author_id` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`full_name` text,
	`phone` text,
	`email` text,
	`password` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);