# Contributing

Thanks for picking up work on the marketing site. This page covers how to set up your copy, how to branch, and what a reviewer looks for.

## How to work on a ticket

1. **Fork this repo** to your own GitHub account, then clone your fork.
2. **Branch from your fork's `main`** using `fix/short-name`, lowercase with hyphens. For example:
   - `fix/responsive-layout`
   - `fix/page-weight`
   - `fix/contact-form-spam`
3. Make your change and check it by hand in the browser (see the ticket for what to check).
4. **Open a pull request in your own fork, against your fork's `main`.** Don't open it against this repo.
5. A maintainer reviews it. Address the feedback by pushing more commits to the same branch.

Tickets are done in order. Merge one PR into your fork's `main` before you branch for the next ticket.

## Pull requests

- **One pull request per ticket.** Don't bundle unrelated changes; they'll be sent back.
- **The PR title must match the ticket title exactly.**
- **Fill in the PR template.** Say what changed and how you tested it.
- **Screenshots are required for anything visual.** Show before and after at every width you touched. For performance work, include before and after numbers instead.
- Keep commits focused, with clear messages.

## What a reviewer checks

- The change does what the ticket asks, and nothing else.
- Nothing else got worse. In particular, desktop (1440px) must look the same unless the ticket says otherwise.
- The code matches what's already here. Reuse the existing CSS breakpoints and patterns rather than inventing new ones.
- No leftover debug code, commented-out blocks or unused files.
- The PR description is clear enough that someone could understand the change without reading every line.
