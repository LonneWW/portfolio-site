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

  /** usato dal registry module per popolare la lista */
  registerUsedIcon(icon: SimpleIcon) {
    this.usedTechIcons.push({
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
    });
  }

  registerExpIcon(icon: SimpleIcon) {
    this.expTechIcons.push({
      slug: icon.slug,
      title: icon.title,
      hex: icon.hex,
    });
  }

  registerIcon(exp: boolean, icon: SimpleIcon) {
    const iconToOverride = ['github', 'angular', 'render', 'railway'];
    if (iconToOverride.includes(icon.slug)) {
      icon.hex = '';
    }
    exp ? this.registerExpIcon(icon) : this.registerUsedIcon(icon);
  }

  /** recupera l’elenco completo */
  getAllExp(): ReadonlyArray<IconMeta> {
    return this.expTechIcons;
  }
  getAllUsed(): ReadonlyArray<IconMeta> {
    return this.usedTechIcons;
  }
}
