import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "weights" ALTER COLUMN "date" SET DEFAULT '2025-06-13T21:15:10.434Z';
  ALTER TABLE "weights" ADD COLUMN "comment" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "weights" ALTER COLUMN "date" SET DEFAULT '2025-06-12T20:19:42.777Z';
  ALTER TABLE "weights" DROP COLUMN IF EXISTS "comment";`)
}
