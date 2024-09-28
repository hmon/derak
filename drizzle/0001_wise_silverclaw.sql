CREATE TABLE `comments` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text,
	`email` text,
	`name` text,
	`post_id` integer
);
