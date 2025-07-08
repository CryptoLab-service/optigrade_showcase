'use client';
import { createContext } from 'react';
import {
  BorderStyle,
  ChartMode,
  ChartVariant,
  DataThemeProvider,
  IconProvider,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  ThemeProvider as CoreThemeProvider,
  ToastProvider,
  TransitionStyle,
  SolidType,
  SurfaceStyle
} from "@once-ui-system/core";
import { style, dataStyle } from "@/resources";
import { iconLibrary } from "@/resources/icons";

// Create and export AppContext
export const AppContext = createContext(null);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={/* context value */}>
      <CoreThemeProvider
        brand={style.brand as Schemes}
        accent={style.accent as Schemes}
        neutral={style.neutral as NeutralColor}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        border={style.border as BorderStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
        scaling={style.scaling as ScalingSize}
      >
        <DataThemeProvider
          variant={dataStyle.variant as ChartVariant}
          mode={dataStyle.mode as ChartMode}
          height={dataStyle.height}
          axis={{
            stroke: dataStyle.axis.stroke
          }}
          tick={{
            fill: dataStyle.tick.fill,
            fontSize: dataStyle.tick.fontSize,
            line: dataStyle.tick.line
          }}
        >
          <ToastProvider>
            <IconProvider icons={iconLibrary}>
              {children}
            </IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </CoreThemeProvider>
    </AppContext.Provider>
  );
}
