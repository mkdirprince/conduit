import { z } from "zod";
import {
  profileSchema,
  userSchema,
  commentSchema,
  tagsSchema,
  articleSchema,
  newProfileSchema,
  newArticleSchema,
  newUserSchema,
} from "../model/userSchema";

// Profile type
export type Profile = z.infer<typeof profileSchema>;

// User type
export type User = z.infer<typeof userSchema>;

// Article type
export type Article = z.infer<typeof articleSchema>;

// Comment type
export type Comment = z.infer<typeof commentSchema>;

// tags schena
export type Tags = z.infer<typeof tagsSchema>;

// new user schema
export type NewUser = z.infer<typeof newUserSchema>;

// new profile schema
export type NewProfile = z.infer<typeof newProfileSchema>;

// new article schema
export type NewArticle = z.infer<typeof newArticleSchema>;
