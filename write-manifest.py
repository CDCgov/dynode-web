from pathlib import Path
from rsconnect.models import AppModes
from rsconnect.bundle import Manifest

print("Creating manifest.json")
manifest = Manifest(app_mode=AppModes.STATIC)

for path in Path(".").rglob("**/*"):
    if (
        path.is_file()
        and not path.parts[0].startswith(".")
        and not path.name.startswith(".")
        and path.name not in ("manifest.json", "write-manifest.py")
    ):
        print(f"Adding {path} to manifest")
        manifest.add_file(path)

with open("manifest.json", "wt") as fp:
    fp.write(manifest.json)
