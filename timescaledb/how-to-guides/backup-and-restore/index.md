# Backup and restore

TimescaleDB takes advantage of the reliable backup and restore functionality
provided by PostgreSQL. There are a few different mechanisms you can use to
backup your TimescaleDB database:
*   Logical backups with the [timescaledb-backup][timescaledb-backup] tool, or
    with [pg_dump and pg_restore][logical-backups].
*   [Physical backups][physical-backups] with `pg_basebackup` or another tool.
*   [Ongoing physical backups][ongoing-physical-backups] using write-ahead log (WAL) archiving.


[timescaledb-backup]: /how-to-guides/backup-and-restore/timescaledb-backup
[physical-backups]: /how-to-guides/backup-and-restore/physical/
[ongoing-physical-backups]: /how-to-guides/backup-and-restore/docker-and-wale/
[logical-backups]: /how-to-guides/backup-and-restore/pg-dump-and-restore/
