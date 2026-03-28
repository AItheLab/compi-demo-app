# Audit & Vulnerability Updates

## Security Audits

### Run npm audit
```bash
npm audit
```
Reports known vulnerabilities in dependencies.

### Fix vulnerabilities automatically
```bash
npm audit fix
```
Attempts to upgrade packages to patch vulnerable versions.

### Generate audit report
```bash
npm audit --json > audit-report.json
```
Creates a detailed JSON report for CI/CD pipelines.

## Dependency Updates

### Check for outdated packages
```bash
npm outdated
```
Lists packages with available updates.

### Update all dependencies safely
```bash
npm update
```
Updates to compatible versions per `package.json` semver ranges.

### Update to latest versions
```bash
npm upgrade [package-name]
```
Or manually edit `package.json` and run `npm install`.

## CI/CD Integration

Add to your workflow to fail on vulnerabilities:
```bash
npm audit --audit-level=moderate
```

Use `npm ci` instead of `npm install` in CI for reproducible builds.
