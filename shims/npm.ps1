param([Parameter(ValueFromRemainingArguments=$true)][string[]]$args)
# Corepack shim to force npm@9.8.1 for this session
& corepack npm@9.8.1 @args
