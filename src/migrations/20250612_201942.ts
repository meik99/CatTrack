import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "weights" ALTER COLUMN "date" SET DEFAULT '2025-06-12T20:19:42.777Z';
  ALTER TABLE "media" ADD COLUMN "sizes_icon_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_card_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_card_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_card_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_card_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_card_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_card_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_original_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_original_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_original_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_original_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_original_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_original_filename" varchar;
  ALTER TABLE "cats" ADD COLUMN "avatar_id" integer;
  DO $$ BEGIN
   ALTER TABLE "cats" ADD CONSTRAINT "cats_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "media_sizes_icon_sizes_icon_filename_idx" ON "media" USING btree ("sizes_icon_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_original_sizes_original_filename_idx" ON "media" USING btree ("sizes_original_filename");
  CREATE INDEX IF NOT EXISTS "cats_avatar_idx" ON "cats" USING btree ("avatar_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cats" DROP CONSTRAINT "cats_avatar_id_media_id_fk";
  
  DROP INDEX IF EXISTS "media_sizes_icon_sizes_icon_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_card_sizes_card_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_original_sizes_original_filename_idx";
  DROP INDEX IF EXISTS "cats_avatar_idx";
  ALTER TABLE "weights" ALTER COLUMN "date" SET DEFAULT '2025-06-10T17:16:40.181Z';
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_card_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_original_filename";
  ALTER TABLE "cats" DROP COLUMN IF EXISTS "avatar_id";`)
}
