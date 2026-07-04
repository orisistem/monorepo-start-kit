#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"

# Load environment variables
set -a
source "$DIR/.env"
set +a

cd "$DIR"

ansible-playbook "playbooks/site.yml" -l "${ENVIRONMENT:-staging}" "$@"