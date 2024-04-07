import { z } from "zod";

// user schema for authentication
export const userSchema = z.object({
  id: z.string(),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({
      message: "Invalid email address",
    }),
  username: z.string({
    required_error: "Username is required",
  }),
  passwordHash: z.string(),
  bio: z.string(),
  image: z.string().optional(),
});

// profile schema
export const profileSchema = z.object({
  id: z.string(),
  username: z.string({
    required_error: "Username is required",
  }),
  bio: z.string().optional(),
  Image: z.string().optional(),
  following: z.boolean(),
});

// article schema
export const articleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string().optional(),
  body: z.string({
    required_error: "Article content is required",
  }),
  tagList: z.array(
    z.string({
      required_error: "A tag is required",
    })
  ),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: z.lazy(() => profileSchema),
});

// comment schema
export const commentSchema = z.object({
  id: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  body: z.string({
    required_error: "Comment content required",
  }),
  author: z.lazy(() => profileSchema),
});

// tags schema
export const tagsSchema = z.array(z.string());

// user schema without the id field for new entries
export const newUserSchema = userSchema.omit({
  id: true,
  passwordHash: true,
});

// profile schema without the id field for new entries
export const newProfileSchema = profileSchema.omit({
  id: true,
});

// article schema without the id field for new entries
export const newArticleSchema = articleSchema.omit({
  id: true,
});
