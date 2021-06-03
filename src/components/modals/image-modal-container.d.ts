<<<<<<< HEAD
import React from 'react';
import {setExportImageSetting, cleanupExportImage} from '../../actions';
import {Provider} from '../../cloud-providers';

export type ImageModalContainerProps = {
  cloudProviders?: Provider[];
  currentProvider?: string;
  onUpdateImageSetting: typeof setExportImageSetting;
  cleanupExportImage: typeof cleanupExportImage;
};

export const ImageModalContainer: React.FunctionComponent<ImageModalContainerProps>;
export default ImageModalContainer;
=======
import React from 'react';
import {SetExportImageSettingUpdaterAction} from '../../actions';
import {Provider} from '../../cloud-providers';

export type ImageModalContainerProps = {
  cloudProviders?: Provider[];
  currentProvider?: string;
  onUpdateImageSetting: (newSetting: SetExportImageSettingUpdaterAction['payload']) => void;
  cleanupExportImage: () => void;
};

export const ImageModalContainer: React.FunctionComponent<ImageModalContainerProps>;
export default ImageModalContainer;
>>>>>>> master
