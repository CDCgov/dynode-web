# Dynode-Web

**This project is currently in the early stages of development and not ready for use in production.**

## Getting started

- Install rust
    - The nightly channel is specified in the `rust-toolchain.toml`, but you may need to explicitly swith with `rustup override set nightly`
    - Depending on your OS, you may need to explicitly specify your architecture, e.g., with `rustup target add x86_64-unknown-linux-gnu`
- Install wasm-pack: `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`
- Install [node](https://nodejs.org/en/download)
- Install [pnpm](https://pnpm.io/installation#on-posix-systems)
- Run model tests: `cargo test`
- Install frontend: `pnpm install`
    - Because of platform differences, you may need to delete `node_modules` and `package-lock.json` and run `pnpm install` again: `rm -rf package-lock.json node_modules/ && pnpm install`
- Run frontend tests: `pnpm run test`
- Compile the model to Web Assembly: `pnpm run wasm`
- Run the frontend: `pnpm run dev`

## Contributing

### Updating parameters

- Labels and tooltips are in `src/config/parameters.config.ts`
- Ranges are in `src/views/ParamsEditor.tsx` and `src/mitigations/`
- Default values are in `wasm_dynode/src/parameters.rs` and `wasm_dynode/src/mitigations.rs`

---

## General disclaimer

This repository was created for use by CDC programs to collaborate on public health related projects in support of the [CDC mission](https://www.cdc.gov/about/organization/mission.htm). GitHub is not hosted by the CDC, but is a third party website used by CDC and its partners to share information and collaborate on software. CDC use of GitHub does not imply an endorsement of any one particular service, product, or enterprise.

## Public Domain Standard Notice

This repository constitutes a work of the United States Government and is not
subject to domestic copyright protection under 17 USC § 105. This repository is in
the public domain within the United States, and copyright and related rights in
the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
All contributions to this repository will be released under the CC0 dedication. By
submitting a pull request you are agreeing to comply with this waiver of
copyright interest.

## License Standard Notice

The repository utilizes code licensed under the terms of the Apache Software
License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under
the terms of the Apache Software License version 2, or (at your option) any
later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the Apache Software License for more details.

You should have received a copy of the Apache Software License along with this
program. If not, see <http://www.apache.org/licenses/LICENSE-2.0.html>

The source code forked from other open source projects will inherit its license.

## Privacy Standard Notice

This repository contains only non-sensitive, publicly available data and
information. All material and community participation is covered by the
[Disclaimer](DISCLAIMER.md)
and [Code of Conduct](code-of-conduct.md).
For more information about CDC's privacy policy, please visit [http://www.cdc.gov/other/privacy.html](https://www.cdc.gov/other/privacy.html).

## Contributing Standard Notice

Anyone is encouraged to contribute to the repository by [forking](https://help.github.com/articles/fork-a-repo)
and submitting a pull request. (If you are new to GitHub, you might start with a
[basic tutorial](https://help.github.com/articles/set-up-git).) By contributing
to this project, you grant a world-wide, royalty-free, perpetual, irrevocable,
non-exclusive, transferable license to all users under the terms of the
[Apache Software License v2](http://www.apache.org/licenses/LICENSE-2.0.html) or
later.

All comments, messages, pull requests, and other submissions received through
CDC including this GitHub page may be subject to applicable federal law, including but not limited to the Federal Records Act, and may be archived. Learn more at [http://www.cdc.gov/other/privacy.html](http://www.cdc.gov/other/privacy.html).

## Records Management Standard Notice

This repository is not a source of government records, but is a copy to increase
collaboration and collaborative potential. All government records will be
published through the [CDC web site](http://www.cdc.gov).

## Additional Standard Notices

Please refer to [CDC's Template Repository](https://github.com/CDCgov/template) for more information about [contributing to this repository](https://github.com/CDCgov/template/blob/main/CONTRIBUTING.md), [code of conduct](https://github.com/CDCgov/template/blob/main/code-of-conduct.md), and other related documentation.
