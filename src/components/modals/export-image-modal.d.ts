<<<<<<< HEAD
import React from 'react';
import {setExportImageSetting, cleanupExportImage} from '../../actions';
import {ExportImage} from '../../reducers';
import {WithIntlProps} from 'react-intl';

export type ExportImageModalProps = WithIntlProps<{
  exportImage: ExportImage;
  mapW: number;
  mapH: number;
  onUpdateImageSetting: typeof setExportImageSetting;
  cleanupExportImage: typeof cleanupExportImage;
}>;

export const ExportImageModal: React.FunctionComponent<ExportImageModalProps>;
function ExportImageModalFactory(): React.FunctionComponent<ExportImageModalProps>;

export default ExportImageModalFactory;
=======
import {FunctionComponent} from 'react';
import {SetExportImageSettingUpdaterAction} from '../../actions';
import {ExportImage} from '../../reducers';
import {IntlShape} from 'react-intl';

export type ExportImageModalProps = {
  exportImage: ExportImage;
  mapW: number;
  mapH: number;
  onUpdateImageSetting: (payload: SetExportImageSettingUpdaterAction.payload) => void;
  cleanupExportImage: () => void;
};

type IntlProps = {
  intl: IntlShape;
};

export const ExportImageModal: FunctionComponent<ExportImageModalProps & IntlProps>;
function ExportImageModalFactory(): FunctionComponent<ExportImageModalProps>;

export default ExportImageModalFactory;
>>>>>>> master
