// icon.service.ts
import { Injectable } from '@angular/core';
import type { SimpleIcon } from 'simple-icons';

export interface IconMeta {
  slug: string;
  title: string;
  hex: string;
}

@Injectable({ providedIn: 'root' })
export class IconsService {
  private usedTechIcons: IconMeta[] = [];
  private expTechIcons: IconMeta[] = [];

  //method used to populate the usedTechIcons array, used by the method registerIcon
  registerUsedIcon(icon: SimpleIcon) {
    this.usedTechIcons.push({
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
    });
  }
  //method used to populate the expTechIcons array, used by the method registerIcon
  registerExpIcon(icon: SimpleIcon) {
    this.expTechIcons.push({
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
    });
  }

  //method used to override the hex property of some simple-icons and call the correct function to register the icon
  registerIcon(exp: boolean, icon: SimpleIcon) {
    const iconToOverride = ['github', 'angular', 'render', 'railway'];
    if (iconToOverride.includes(icon.slug)) {
      icon.hex = '';
    }
    exp ? this.registerExpIcon(icon) : this.registerUsedIcon(icon);
  }

  //methods to obtain the array of icons
  getAllExp(): ReadonlyArray<IconMeta> {
    return this.expTechIcons;
  }
  getAllUsed(): ReadonlyArray<IconMeta> {
    return this.usedTechIcons;
  }
}
