module.exports = [
    {
    title: "How-to Guides",
    href: "how-to-guides",
    pageComponents: ['content-list'],
    children: [
      {
        title: "Install TimescaleDB",
        href: "install-timescaledb",
        pageComponents: ['featured-cards'],
        tags: ['timescaledb', 'install'],
        keywords: ['install', 'TimescaleDB'],
        excerpt: 'Install TimescaleDB',
        children: [
          {
            title: "Timescale Forge",
            href: "installation-forge",
            tags: ['tsf', 'install'],
            keywords: ['install', 'Timescale Forge'],
            excerpt: 'Install Timescale Forge'
          },
          {
            title: "Timescale Cloud",
            href: "installation-cloud",
            tags: ['tsc', 'install'],
            keywords: ['install', 'Timescale Cloud'],
            excerpt: 'Install Timescale Cloud',
          },
          {
            title: "Self hosted (including containers)",
            href: "self-hosted",
            type: 'react-page',
            options: { pg_version: ["12", "11"] },
            component: "InstallationPage",
            showNewsletterForm: true,
            tags: ['install', 'timescaledb'],
            keywords: ['TimescaleDB', 'install', 'self-hosted'],
            excerpt: 'Install self-hosted TimescaleDB',
            children: [
              {
                title: "Docker",
                type: 'redirect-to-child-page',
                href: "docker",
                iconSrc: "//assets.iobeam.com/images/docs/moby.png",
                children: [
                  {
                    title: "Docker",
                    type: 'non-menu-page',
                    href: "installation-docker",
                    tags: ['install', 'docker', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'Docker'],
                    excerpt: 'Install self-hosted TimescaleDB with Docker'
                  },
                ],
              },
              {
                title: "Ubuntu",
                type: 'redirect-to-child-page',
                href: "ubuntu",
                iconSrc: "//assets.iobeam.com/images/docs/cof_orange_hex.svg",
                children: [
                  {
                    title: "apt",
                    type: 'non-menu-page',
                    href: "installation-apt-ubuntu",
                    tags: ['install', 'ubuntu', 'apt', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'Ubuntu'],
                    excerpt: 'Install self-hosted TimescaleDB on Ubuntu using apt'
                  },
                  {
                    title: "Source (Ubuntu)",
                    type: 'non-menu-page',
                    href: "installation-source",
                  },
                ],
              },
              {
                title: "Debian",
                type: 'redirect-to-child-page',
                href: "debian",
                iconSrc: "//assets.iobeam.com/images/docs/Debian_logo.svg",
                children: [
                  {
                    title: "apt (Debian)",
                    type: 'non-menu-page',
                    href: "installation-apt-debian",
                    tags: ['install', 'debian', 'apt', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'Debian'],
                    excerpt: 'Install self-hosted TimescaleDB on Debian using apt'
                  },
                  {
                    title: "Source (Debian)",
                    type: 'non-menu-page',
                    href: "installation-source",
                    tags: ['install', 'debian', 'source', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'Debian'],
                    excerpt: 'Install self-hosted TimescaleDB on Debian from source'
                  },
                ],
              },
              {
                title: "RHEL/CentOS",
                type: 'redirect-to-child-page',
                href: "rhel-centos",
                iconSrc: "//assets.iobeam.com/images/docs/Centos_Red_Hat_logo.svg",
                children: [
                  {
                    title: "yum/dnf",
                    type: 'non-menu-page',
                    href: "installation-yum",
                    tags: ['install', 'rhel', 'centos', 'yum', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'RHEL', 'CentOS'],
                    excerpt: 'Install self-hosted TimescaleDB on Red Hat or CentOS using yum or dnf'
                  },
                  {
                    title: "Source (Red Hat or CentOS)",
                    type: 'non-menu-page',
                    href: "installation-source",
                    tags: ['install', 'rhel', 'centos', 'source', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'RHEL', 'CentOS'],
                    excerpt: 'Install self-hosted TimescaleDB on Red Hat or CentOS from source'
                  },
                ],
              },
              {
                title: "Windows",
                type: 'redirect-to-child-page',
                href: "windows",
                iconSrc: "//assets.iobeam.com/images/docs/Windows_logo_-_2012.svg",
                children: [
                  {
                    title: "Installer (.zip)",
                    type: 'non-menu-page',
                    href: "installation-windows",
                    tags: ['install', 'mswin', 'exe', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'MS Windows',],
                    excerpt: 'Install self-hosted TimescaleDB on Microsoft Windows using a zipped .exe file'
                  },
                  {
                    title: "Source (Windows)",
                    type: 'non-menu-page',
                    href: "installation-source-windows",
                    tags: ['install', 'mswin', 'exe', 'source', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'MS Windows'],
                    excerpt: 'Install self-hosted TimescaleDB on Microsoft Windows from source'
                  },
                ],
              },
              {
                title: "AMI",
                type: 'redirect-to-child-page',
                href: "ami",
                iconSrc: "//assets.iobeam.com/images/docs/aws_logo.svg",
                children: [
                  {
                    title: "Amazon AMI (Ubuntu)",
                    type: 'non-menu-page',
                    href: "installation-ubuntu-ami",
                    tags: ['install', 'aws', 'ami', 'ubuntu', 'Timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'AWS', 'AMI', 'Ubuntu'],
                    excerpt: 'Install self-hosted TimescaleDB on Amazon with an Ubuntu AMI'
                  },
                ],
              },
              {
                title: "MacOS",
                type: 'redirect-to-child-page',
                href: "macos",
                iconSrc: "//assets.iobeam.com/images/docs/Apple_logo_black.svg",
                children: [
                  {
                    title: "Homebrew",
                    type: 'non-menu-page',
                    href: "installation-homebrew",
                    tags: ['install', 'macos', 'homebrew', 'timescaledb'],
                    keywords: ['timescaledb', 'install', 'self-hosted', 'MacOS', 'homebrew'],
                    excerpt: 'Install self-hosted TimescaleDB on MacOS using homebrew'
                  },
                  {
                    title: "Source (MacOS)",
                    type: 'non-menu-page',
                    href: "installation-source",
                    tags: ['install', 'macos', 'source', 'timescaledb'],
                    keywords: ['TimescaleDB', 'install', 'self-hosted', 'MacOS'],
                    excerpt: 'Install self-hosted TimescaleDB on MacOS from source'
                  },
                ],
              }
            ],
          },
          {
            title: "Post-install setup",
            href: "post-install-setup",
            tags: ['install', 'setup', 'selfhosted', 'timescaledb'],
            keywords: ['TimescaleDB', 'install', 'setup', 'self-hosted'],
            excerpt: 'Set up self-hosted TimescaleDB after installation'
          }
        ]
      },
      {
        title: "Install TimescaleDB Toolkit",
        href: "install-timescaledb-toolkit",
        tags: ['toolkit', 'install', 'timescaledb'],
        keywords: ['TimescaleDB', 'install', 'toolkit'],
        excerpt: 'Install the TimescaleDB toolkit'
      },
      {
        title: "Connecting to TimescaleDB",
        href: "connecting",
        tags: ['toolkit', 'install', 'timescaledb'],
        keywords: ['TimescaleDB', 'install', 'toolkit'],
        excerpt: 'Connect to the TimescaleDB toolkit',
        children: [
            {
              href: "psql",
            }
          ]
      },
      {
        href: "hypertables",
        children: [
          {
            title: "CREATE",
            href: "create",
            tags: ['hypertables', 'create', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Create hypertables'
          },
          {
            title: "ALTER",
            href: "alter",
            tags: ['hypertables', 'edit', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Alter hypertables'
          },
          {
            title: "DROP",
            href: "drop",
            tags: ['hypertables', 'delete', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Drop hypertables'
          },
          {
            title: "Best practices",
            href: "best-practices",
            tags: ['hypertables', 'manage', 'configure', 'tshoot', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Best practices for managing hypertables'
          }
        ]
      },
      {
        href: "distributed-hypertables",
        children: [
          {
            title: "CREATE",
            href: "create",
            tags: ['hypertables', 'create', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Create distributed hypertables'
          },
          {
            title: "INSERT",
            href: "insert",
            tags: ['hypertables', 'ingest', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Insert data into distributed hypertables'
          },
          {
            title: "SELECT",
            href: "select",
            tags: ['hypertables', 'select', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Select data in distributed hypertables'
          },
          {
            title: "Manage data nodes",
            href: "manage-data-nodes",
            tags: ['hypertables', 'nodes', 'manage', 'configure', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Manage data nodes in distributed hypertables'
          },
          {
            title: "Native replication",
            href: "enable-native-replication",
            tags: ['hypertables', 'nodes', 'replicate', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'replicate', 'nodes', 'distributed', 'TimescaleDB'],
            excerpt: 'Replicate data to nodes in distributed hypertables'
          },
          {
            title: "ALTER",
            href: "alter",
            tags: ['hypertables', 'edit', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Alter distributed hypertables'
          },
          {
            title: "DROP",
            href: "drop",
            tags: ['hypertables', 'delete', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Drop distributed hypertables'
          },
          {
            href: "best-practices",
            tags: ['hypertables', 'manage', 'configure', 'tshoot', 'distributed', 'timescaledb'],
            keywords: ['hypertables', 'distributed', 'TimescaleDB'],
            excerpt: 'Best practices for managing distributed hypertables'
          }
        ]
      },
      {
        href: "write-data",
        children: [
          {
            title: "INSERT",
            href: "insert",
            tags: ['hypertables', 'ingest', 'data', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Insert data into hypertables'
          },
          {
            title: "UPDATE",
            href: "update",
            tags: ['hypertables', 'update', 'data', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Update data in hypertables'
          },
          {
            title: "UPSERT",
            href: "upsert",
            tags: ['hypertables', 'update', 'data', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Upsert data into hypertables'
          },
          {
            title: "DELETE",
            href: "delete",
            tags: ['hypertables', 'delete', 'data', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Delete data hypertables'
          }
        ]
      },
      {
        href: "query-data",
        children: [
          {
            title: "SELECT",
            href: "select",
            tags: ['hypertables', 'select', 'data', 'timescaledb'],
            keywords: ['hypertables', 'TimescaleDB'],
            excerpt: 'Select data in hypertables'
          },
          {
            title: "Advanced analytic queries",
            href: "advanced-analytic-queries",
            tags: ['hypertables', 'analytics', 'analyze', 'query', 'timescaledb'],
            keywords: ['hypertables', 'hyperfunctions', 'TimescaleDB'],
            excerpt: 'Use advanced analytics queries'
          }
        ]
      },
      {
        title: "Multi-node setup",
        href: "multi-node-setup",
        children: [
          {
            title: "Multi-node environments",
            href: "required-configuration",
            tags: ['multinode', 'distributed', 'nodes', 'timescaledb'],
            keywords: ['multinode', 'TimescaleDB'],
            excerpt: 'Set up a multi-node environment'
          },
          {
            title: "Enable node communication",
            href: "node-communication",
            tags: ['multinode', 'distributed', 'nodes', 'enable', 'timescaledb'],
            keywords: ['multinode', 'TimescaleDB'],
            excerpt: 'Enable node communication in a multi-node environment'
          },
          {
            title: "Multi-node maintenance tasks",
            href: "maintenance-tasks",
            tags: ['multinode', 'distributed', 'nodes', 'manage', 'timescaledb'],
            keywords: ['multinode', 'TimescaleDB'],
            excerpt: 'Maintain a multi-node environment'
          }
        ]
      },
      {
        href: "continuous-aggregates",
        children: [
          {
            title: "About continuous aggregates",
            href: "about-continuous-aggregates",
            tags: ['caggs', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'About continuous aggregates'
          },
          {
            title: "Create a continuous aggregate",
            href: "create-a-continuous-aggregate",
            tags: ['caggs', 'create', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Create continuous aggregates'
          },
          {
            title: "Refresh policies for continuous aggregates",
            href: "refresh-policies",
            tags: ['caggs', 'manage', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Manage refresh policies for continuous aggregates'
          },
          {
            title:"Time in continuous aggregates",
            href: "time",
            tags: ['caggs', 'manage', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Manage time in continuous aggregates'
          },
          {
            title: "Drop data from continuous aggregates",
            href: "drop-data",
            tags: ['caggs', 'delete', 'data', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Drop data from continuous aggregates'
          },
          {
            title: "Manage materialized hypertables",
            href: "materialized-hypertables",
            tags: ['caggs', 'hypertables', 'manage', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Manage materialized hypertables in continuous aggregates'
          },
          {
            title: "Real time aggregates",
            href: "real-time-aggregates",
            tags: ['caggs', 'manage', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Manage real time aggregates in continuous aggregates'
          },
          {
            title: "Troubleshoot continuous aggregates",
            href: "troubleshooting",
            tags: ['caggs', 'tshoot', 'timescaledb'],
            keywords: ['caggs', 'TimescaleDB'],
            excerpt: 'Troubleshoot continuous aggregates'
          }
        ]
      },
      {
        href: "compression",
        children: [
          {
            title: "About compression",
            href: "about-compression",
            tags: ['compression', 'chunks', 'data', 'timescaledb'],
            keywords: ['compression', 'chunks', 'TimescaleDB'],
            excerpt: 'About data compression'
          },
          {
            title: "Manually compress chunks",
            href: "manually-compress-chunks",
            tags: ['compression', 'chunks', 'data', 'timescaledb'],
            keywords: ['compression', 'chunks', 'TimescaleDB'],
            excerpt: 'Manually compress data chunks'
          },
          {
            title: "Decompress chunks",
            href: "decompress-chunks",
            tags: ['compression', 'chunks', 'data', 'timescaledb'],
            keywords: ['compression', 'chunks', 'TimescaleDB'],
            excerpt: 'Manually decompress data chunks'
          },
          {
            title: "Backfill historical data",
            href: "backfill-historical-data",
            tags: ['compression', 'chunks', 'data', 'timescaledb'],
            keywords: ['compression', 'chunks', 'TimescaleDB'],
            excerpt: 'Backfill historical data to compressed chunks'
          },
          {
            title: "Modify a schema",
            href: "modify-a-schema",
            tags: ['compression', 'chunks', 'data', 'timescaledb'],
            keywords: ['compression', 'chunks', 'TimescaleDB'],
            excerpt: 'Change the data schema in compressed chunks'
          }
        ]
      },
      {
        title: "User-defined actions",
        href: "user-defined-actions",
        children: [
          {
            title: "Create and register",
            href: "create-and-register",
            tags: ['action', 'create', 'timescaledb'],
            keywords: ['action', 'TimescaleDB'],
            excerpt: 'Create a user-defined action'
          },
          {
            title: "Test and debug",
            href: "test-and-debug",
            tags: ['action', 'test', 'timescaledb'],
            keywords: ['action', 'TimescaleDB'],
            excerpt: 'Test and debug user-defined actions'
          },
          {
            title: "Altering and deleting",
            href: "alter-and-delete",
            tags: ['action', 'edit', 'delete', 'timescaledb'],
            keywords: ['action', 'TimescaleDB'],
            excerpt: 'Edit and delete user-defined actions'
          },
          {
            title: "Example of generic retention",
            href: "example-generic-retention",
            tags: ['action', 'example', 'retention', 'timescaledb'],
            keywords: ['action', 'example', 'TimescaleDB'],
            excerpt: 'Example user-defined action for a retention policy'
          },
          {
            title: "Example of tiered storage",
            href: "example-tiered-storage",
            tags: ['action', 'example', 'timescaledb'],
            keywords: ['action', 'example', 'TimescaleDB'],
            excerpt: 'Example user-defined action for tiered storage'
          },
          {
            title: "Example of downsample and compress",
            href: "example-downsample-and-compress",
            tags: ['action', 'example', 'compress', 'timescaledb'],
            keywords: ['action', 'example', 'TimescaleDB'],
            excerpt: 'Example user-defined action for downsample and compress'
          }
        ]
      },
      {
        href: "data-retention",
        children: [
          {
            title: "Create a retention policy",
            href: "create-a-retention-policy",
            tags: ['retention', 'data', 'create', 'timescaledb'],
            keywords: ['retention', 'data', 'TimescaleDB'],
            excerpt: 'Create a data retention policy'
          },
          {
            title: "Manually drop chunks",
            href: "manually-drop-chunks",
            tags: ['retention', 'data', 'delete', 'chunks', 'timescaledb'],
            keywords: ['retention', 'data', 'TimescaleDB'],
            excerpt: 'Manually drop chunks'
          },
          {
            title: "Data retention with continuous aggregates",
            href: "data-retention-with-continuous-aggregates",
            tags: ['retention', 'caggs', 'data', 'timescaledb'],
            keywords: ['retention', 'data', 'caggs', 'TimescaleDB'],
            excerpt: 'Using data retention policies with continuous aggregates'
          }
        ]
      },
      {
        title: "Data Tiering",
        href: "data-tiering",
        children: [
          {
            title: "Move data",
            href: "move-data",
            tags: ['tiering', 'data', 'migrate', 'chunks', 'timescaledb'],
            keywords: ['tiering', 'data', 'TimescaleDB'],
            excerpt: 'Move data with data tiering'
          }
        ]
      },
      {
        title: "Replication and HA",
        href: "replication-and-ha",
        children: [
          {
            title: "Replication and HA",
            href: "replication",
            tags: ['ha', 'replicate', 'timescaledb'],
            keywords: ['ha', 'replicate', 'TimescaleDB'],
            excerpt: 'Replication and high availability'
          }
        ]
      },
      {
        title: "Backup and restore",
        href: "backup-and-restore",
        children: [
          {
            title: "The timescaledb-backup tool",
            href: "timescaledb-backup",
            tags: ['backup', 'restore', 'timescaledb'],
            keywords: ['backup', 'TimescaleDB'],
            excerpt: 'Backing up and restoring with the timescaledb-backup tool'
          },
          {
            title: "Using pg_dump/pg_restore",
            href: "pg-dump-and-restore",
            tags: ['backup', 'restore', 'timescaledb'],
            keywords: ['backup', 'TimescaleDB'],
            excerpt: 'Backing up and restoring with the pg_dump and pg_restore'
          },
          {
            title: "Docker & WAL-E",
            href: "docker-and-wale",
            tags: ['backup', 'restore', 'timescaledb'],
            keywords: ['backup', 'TimescaleDB'],
            excerpt: 'Backing up and restoring with Docker and WAL-E'
          },
          {
            title: "Physical backups",
            href: "physical",
            tags: ['backup', 'restore', 'timescaledb'],
            keywords: ['backup', 'TimescaleDB'],
            excerpt: 'Backing up and restoring with physical backups'
          }
        ]
      },
      {
        title: "Schema management",
        href: "schema-management",
        children: [
          {
            title: "ALTER hypertables",
            href: "alter",
            tags: ['schema', 'hypertables', 'edit', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'TimescaleDB'],
            excerpt: 'Change the schema of a hypertable'
          },
          {
            title: "Indexing",
            href: "indexing",
            tags: ['schema', 'hypertables', 'index', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'TimescaleDB'],
            excerpt: 'Create an index on a hypertable'
          },
          {
            title: "Triggers",
            href: "triggers",
            tags: ['schema', 'hypertables', 'manage', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'TimescaleDB'],
            excerpt: 'Create an index on a hypertable'
          },
          {
            title: "Constraints",
            href: "constraints",
            tags: ['schema', 'hypertables', 'manage', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'TimescaleDB'],
            excerpt: 'Create constraints on a hypertable'
          },
          {
            title: "JSON",
            href: "json",
            tags: ['schema', 'hypertables', 'json', 'data', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'json', 'TimescaleDB'],
            excerpt: 'Using JSON data types in a hypertable'
          },
          {
            title: "Tablespaces",
            href: "tablespaces",
            tags: ['schema', 'hypertables', 'manage', 'data', 'timescaledb'],
            keywords: ['schema', 'hypertables', 'TimescaleDB'],
            excerpt: 'Create tablespaces on a hypertable'
          }
        ]
      },
      {
        title: "Migrate existing data",
        href: "migrate-data",
        children: [
          {
            title: "Migrate from the same database",
            href: "same-db",
            tags: ['migrate', 'data', 'postgresql', 'timescaledb'],
            keywords: ['migrate', 'data', 'TimescaleDB'],
            excerpt: 'Migrate data from the same PostgreSQL database'
          },
          {
            title: "Migrate from a different database",
            href: "different-db",
            tags: ['migrate', 'data', 'postgresql', 'timescaledb'],
            keywords: ['migrate', 'data', 'TimescaleDB'],
            excerpt: 'Migrate data from a different PostgreSQL database'
          },
          {
            title: "Import from CSV",
            href: "import-csv",
            tags: ['migrate', 'data', 'timescaledb'],
            keywords: ['migrate', 'data', 'TimescaleDB'],
            excerpt: 'Migrate data from a .csv file'
          },
          {
            title: "Migrate InfluxDB data",
            href: "migrate-influxdb",
            tags: ['migrate', 'data', 'influxdb', 'timescaledb'],
            keywords: ['migrate', 'data', 'influxdb', 'TimescaleDB'],
            excerpt: 'Migrate data from an existing InfluxDB database'
          }
        ]
      },
      {
        title: "Update TimescaleDB",
        href: "update-timescaledb",
        children: [
          {
            title: "Update from TimescaleDB 1.x to 2.x",
            href: "update-timescaledb-2",
            tags: ['upgrade', '1-x', '2-x', 'timescaledb'],
            keywords: ['upgrade', '1-x', '2-x','TimescaleDB'],
            excerpt: 'Upgrade from TimescaleDB 1.x to TimescaleDB 2.x'
          },
          {
            title: "Update using Docker",
            href: "updating-docker",
            tags: ['upgrade', 'docker', '1-x', '2-x', 'timescaledb'],
            keywords: ['upgrade', 'docker', '1-x', '2-x','TimescaleDB'],
            excerpt: 'Upgrade from TimescaleDB 1.x to TimescaleDB 2.x using Docker'
          },
          {
            title: "Upgrade PostgreSQL",
            href: "upgrade-postgresql",
            tags: ['upgrade', 'postregsql', 'timescaledb'],
            keywords: ['upgrade', 'postgresql','TimescaleDB'],
            excerpt: 'Upgrade the version of PostgreSQL used by TimescaleDB'
          }
        ]
      },
      {
        href: "configuration",
        children: [
          {
            title: "Using timescaledb-tune",
            href: "timescaledb-tune",
            tags: ['configure', 'timescaledb'],
            keywords: ['configure', 'timescaledb'],
            excerpt: 'Configure TimescaleDB using timescaledb-tune'
          },
          {
            title: "Manual PostgreSQL configuration",
            href: "postgres-config",
            tags: ['configure', 'postgresql', 'timescaledb'],
            keywords: ['configure', 'postgresql', 'timescaledb'],
            excerpt: 'Configure TimescaleDB using the PostgreSQL configuration file'
          },
          {
            title: "TimescaleDB configuration",
            href: "timescaledb-config",
            tags: ['configure', 'timescaledb'],
            keywords: ['configure', 'timescaledb'],
            excerpt: 'Configure TimescaleDB using TimescaleDB configuration parameters'
          },
          {
            title: "Docker configuration",
            href: "docker-config",
            tags: ['configure', 'docker', 'timescaledb'],
            keywords: ['configure', 'docker', 'timescaledb'],
            excerpt: 'Configure TimescaleDB when running within a Docker container'
          },
          {
            title: "Telemetry",
            href: "telemetry",
            tags: ['configure', 'telemetry', 'timescaledb'],
            keywords: ['configure', 'telemetry', 'timescaledb'],
            excerpt: 'Configure telemetry gathered by TimescaleDB'
          }
        ]
      },

      {
        title: "Alerting",
        href: "alerting",
        tags: ['alert', 'configure', 'timescaledb'],
        keywords: ['alert', 'configure', 'timescaledb'],
        excerpt: 'Configure alerting within TimescaleDB'
      },
      {
        title: "Ingest data from other sources",
        href: "ingest-data",
        tags: ['ingest', 'data', 'timescaledb'],
        keywords: ['ingest', 'timescaledb'],
        excerpt: 'Ingest data into TimescaleDB'
      },
      {
        title: "Troubleshoot TimescaleDB",
        href: "troubleshoot-timescaledb",
        tags: ['tshoot', 'timescaledb'],
        keywords: ['troubleshoot', 'timescaledb'],
        excerpt: 'Troubleshooting TimescaleDB'
      },
      {
        title: "Additional tooling",
        href: "tooling",
        tags: ['manage', 'timescaledb'],
        keywords: ['manage', 'timescaledb'],
        excerpt: 'Additional tooling for managing TimescaleDB'
      }
    ]
  }
];
