<<<<<<< HEAD
import React from 'react';
import {Provider} from '../../cloud-providers';
import {setExportImageSetting, cleanupExportImage} from '../../actions';

export type OverwriteMapModalProps = {
  mapSaved: string;
  title: string;
  cloudProviders: Provider[];
  isProviderLoading: boolean;
  currentProvider: string;

  // callbacks
  onUpdateImageSetting: typeof setExportImageSetting;
  cleanupExportImage: typeof cleanupExportImage;
};

function OverwriteMapModalFactory(): React.FunctionComponent<OverwriteMapModal>;
export default OverwriteMapModalFactory;
=======
import React from 'react';
import {Provider} from '../../cloud-providers';
import {ImageModalContainerProps} from './image-modal-container';

export type OverwriteMapModalProps = {
  mapSaved: string;
  title: string;
  cloudProviders: Provider[];
  isProviderLoading: boolean;
  currentProvider: string;

  // callbacks
  onUpdateImageSetting: ImageModalContainerProps['onUpdateImageSetting'];
  cleanupExportImage: onUpdateImageSetting['cleanupExportImage'];
};

function OverwriteMapModalFactory(): React.FunctionComponent<OverwriteMapModal>;
export default OverwriteMapModalFactory;
>>>>>>> master
