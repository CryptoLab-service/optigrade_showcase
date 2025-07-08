'use client';

import {
  DataThemeProvider,
  IconProvider,
  ThemeProvider,
  ToastProvider,
} from "@once-ui-system/core";
import { style, dataStyle } from "@/resources";
import { iconLibrary } from "@/resources/icons";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      brand={"custom"}
      accent={"custom"}
      neutral={style.neutral}
      solid={style.solid}
      solidStyle={style.solidStyle}
      border={style.border}
      surface={style.surface}
      transition={style.transition}
      scaling={style.scaling}
    >
      <DataThemeProvider
        variant={dataStyle.variant}
        mode={dataStyle.mode}
        height={dataStyle.height}
        axis={{
          stroke: dataStyle.axis.stroke,
        }}
        tick={{
          fill: dataStyle.tick.fill,
          fontSize: dataStyle.tick.fontSize,
          line: dataStyle.tick.line,
        }}
      >
        <ToastProvider>
          <IconProvider icons={iconLibrary}>
            {children}
          </IconProvider>
        </ToastProvider>
      </DataThemeProvider>
    </ThemeProvider>
  );
}